import { PlusIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { QuestionEditor } from './QuestionEditor';
import { v4 as uuidv4 } from "uuid"

export const SurveyQuestion = ({ survey, onSurveyUpdate }) => {

    const [model, setModel] = useState({ ...survey });

    const addQuestion = () => {
        setModel({
            ...model,
            questions: [
                ...model.questions,
                {
                    id: uuidv4(),
                    type: "text",
                    question: "",
                    description: "",
                    data: {},
                },
            ],
        });
    };

    const questionChange = (question) => {

        if (!question) return;

        const newQuestions = model.questions.map(q => {
            if (q.id == question.id) {
                return { ...question }
            }
            return q;
        });

        console.log(newQuestions)

        setModel({
            ...model,
            questions: newQuestions,
        })
    };

    const deleteQuestion = (question) => {
        const newQuestions = model.questions.map(q => q.id !== question.id)
        setModel({
            ...model,
            questions: newQuestions
        })
    }

    useEffect(() => {
        onSurveyUpdate(model)
    }, [model])

    return (
        <>
            <div className='flex justify-between'>
                <h3>Survey Question</h3>
                <button
                    type='button'
                    onClick={addQuestion}
                    className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                    <PlusIcon className="w-4 mr-2" />
                    Add Question
                </button>
            </div>
            {
                model.questions.length ? (model.questions.map((q, index) => (
                    <QuestionEditor
                        questionChange={questionChange}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                        key={index}
                        index={index}
                        question={q}
                    />
                ))) : (
                    <div className="text-gray-400 text-center py-4">
                        You don&apos;t have any question created.
                    </div >
                )
            }
        </>
    )
}



/**
 * import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import { QuestionEditor } from "./QuestionEditor";

export const SurveyQuestion = ({ survey, onSurveyUpdate }) => {
    
    const [model, setModel] = useState({ ...survey });

    const addQuestion = () => {
        setModel({
            ...model,
            questions: [
                ...model.questions,
                {
                    id: uuidv4(),
                    type: "",
                    question: "",
                    description: "",
                    data: {},
                },
            ],
        });
    };

    const questionChange = (question) => {
        if(!question) return;

        
    };

    const deleteQuestion = () => {

    }

    return (
        <>
            <div>
                <h3></h3>
                <button
                    onClick={addQuestion}
                    type="button"
                    className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                >
                    <PlusIcon className="w-4 mr-2" />
                    Add Question
                </button>
            </div>
            {model.question.length ? (
                model.question.map((q, index) => (
                    <QuestionEditor
                        questionChange={questionChange}
                        addQuestion={addQuestion}
                        deleteQuestion={deleteQuestion}
                        key={index}
                        index={index}
                        question={q}
                    />
                ))
            ) : (
                <div className="text-gray-400 text-center py-4">
                    You don&apos;t have any question created.
                </div>
            )}
        </>
    );
};

 */