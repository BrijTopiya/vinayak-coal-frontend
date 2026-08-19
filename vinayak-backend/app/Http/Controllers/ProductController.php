<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // બધા products get કરવા (GET /api/products)
    public function index()
    {
        return response()->json(Product::all());
    }

    // Category પ્રમાણે products get કરવા
public function byCategory($category)
{
    $products = Product::where('category', $category)->get();
    return response()->json($products);
}

    // નવો product ઉમેરવો (POST /api/products)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'calorific_value' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        $product = Product::create($validated);

        return response()->json($product, 201);
    }

    // એક product get કરવો (GET /api/products/{id})
    public function show(Product $product)
    {
        return response()->json($product);
    }

    // Product update કરવો (PUT /api/products/{id})
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'category' => 'sometimes|string',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
            'calorific_value' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);

        $product->update($validated);

        return response()->json($product);
    }

    // Product delete કરવો (DELETE /api/products/{id})
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}