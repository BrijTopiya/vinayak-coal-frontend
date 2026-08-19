<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ContactController;



Route::get('/products/category/{category}', [ProductController::class, 'byCategory']);
Route::apiResource('products', ProductController::class);

Route::apiResource('products', ProductController::class);


Route::get('/products/category/{category}', [ProductController::class, 'byCategory']);
Route::apiResource('products', ProductController::class);

Route::post('/contact', [ContactController::class, 'store']);
Route::get('/contact', [ContactController::class, 'index']);