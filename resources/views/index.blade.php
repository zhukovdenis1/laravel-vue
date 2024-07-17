@extends('layouts.app')

@section('content')

    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'person.index'}">People</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'person.create'}">Add</router-link>
        </li>
    </ul>

    <router-view></router-view>
@endsection
