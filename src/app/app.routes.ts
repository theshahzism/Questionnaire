import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionInfoComponent } from './pages/question-info/question-info.component';
import { QuestionJoinComponent } from './pages/question-join/question-join.component';

export const routes: Routes = [
    {
    path:"",
    component:QuestionJoinComponent
    },
    {
    path:"question-info",
    component:QuestionInfoComponent
    },
    {
    path:"question",
    component:QuestionComponent
    }
];
