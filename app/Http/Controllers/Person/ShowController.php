<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource;
use App\Models\Person;

class ShowController extends Controller
{
    public function index(Person $person)
    {
        return new PersonResource($person);
    }
}
