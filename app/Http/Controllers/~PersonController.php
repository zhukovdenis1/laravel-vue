<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $persons = [
            ['id' => 1, 'name' => 'Vasya', 'age' => 20, 'job' => 'coach'],
            ['id' => 2, 'name' => 'Eelena', 'age' => 17, 'job' => 'rest'],
            ['id' => 3, 'name' => 'Petr', 'age' => 34, 'job' => 'seller'],
            ['id' => 4, 'name' => 'Ksusha', 'age' => 25, 'job' => 'traveller'],
            ['id' => 5, 'name' => 'Olya', 'age' => 21, 'job' => 'teacher']
        ];
        return $persons;
    }
}
