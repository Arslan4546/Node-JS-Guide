import 'dart:convert';

import 'package:auth_with_node/core/utils/flush_bar.dart';
import 'package:auth_with_node/features/auth/presantation/auth_widgets.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final _emailController = TextEditingController();
  final _passController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  Future<void> _handleSignUp() async {
    try {
      final response = await http.post(
        Uri.parse("http://localhost:3000/api/auth/signup"),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "email": _emailController.text.trim(),
          "password": _passController.text.trim(),
        }),
      );

      print("Status Code: ${response.statusCode}");
      print("Body: ${response.body}");

      final data = jsonDecode(response.body);

      if (response.statusCode == 201) {
        FlushbarHelper.showSuccess(context: context, message: data["message"]);
      } else {
        // ❌ error from backend
        FlushbarHelper.showError(context: context, message: data["message"]);
      }
    } catch (e) {
      print("ERROR: $e");

      FlushbarHelper.showError(
        context: context,
        message: "Network Error / Server not reachable",
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ResponsiveAuthContainer(
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Create Account",
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                "Enter your details to get started",
                style: TextStyle(color: Colors.grey[600]),
              ),
              const SizedBox(height: 32),
              AuthTextField(
                label: "Email",
                icon: Icons.email_outlined,
                controller: _emailController,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Please enter your email";
                  }
                  if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                    return "Please enter a valid email";
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              AuthTextField(
                label: "Password",
                icon: Icons.lock_outline,
                controller: _passController,
                isPassword: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return "Please enter your password";
                  }
                  if (value.length < 6) {
                    return "Password must be at least 6 characters long";
                  }
                  return null;
                },
              ),
              const SizedBox(height: 24),
              PrimaryButton(text: "Sign Up", onPressed: _handleSignUp),
              const SizedBox(height: 16),
              Center(
                child: TextButton(
                  onPressed: () => Navigator.pushNamed(context, '/login'),
                  child: const Text("Already have an account? Log In"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
