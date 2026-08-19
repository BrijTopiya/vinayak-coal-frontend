<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // નવો contact submission save કરવો (POST /api/contact)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json([
            'message' => 'Thank you! We will get back to you soon.',
            'data' => $contact,
        ], 201);
    }

    // બધા submissions જોવા (GET /api/contact) - admin panel માટે useful
    public function index()
    {
        return response()->json(Contact::latest()->get());
    }
}