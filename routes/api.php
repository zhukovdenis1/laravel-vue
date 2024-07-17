<?php

use Illuminate\Support\Facades\Route;


Route::group(['namespace' => 'Person', 'prefix' => 'people'], function () {
    Route::post('/', [\App\Http\Controllers\Person\StoreController::class, 'index']);
    Route::get('/', [\App\Http\Controllers\Person\IndexController::class, 'index']);
    Route::get('/{person}', [\App\Http\Controllers\Person\ShowController::class, 'index']);
    Route::patch('/{person}', [\App\Http\Controllers\Person\UpdateController::class, 'index']);
    Route::delete('/{person}', [\App\Http\Controllers\Person\DeleteController::class, 'index']);
});
