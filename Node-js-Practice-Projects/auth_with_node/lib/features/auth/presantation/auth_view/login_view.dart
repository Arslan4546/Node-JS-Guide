import 'dart:convert';

import 'package:auth_with_node/core/utils/flush_bar.dart';
import 'package:auth_with_node/features/auth/presantation/auth_widgets.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _emailController = TextEditingController();
  final _passController = TextEditingController();
  final _formKey = GlobalKey<FormState>();
  Future<void> _handleLogin() async {
    try {
      final response = await http.post(
        Uri.parse("http://localhost:3000/api/auth/login"),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          "email": _emailController.text.trim(),
          "password": _passController.text.trim(),
        }),
      );

      print("Status Code: ${response.statusCode}");
      print("Body: ${response.body}");

      final data = jsonDecode(response.body);

      if (response.statusCode == 200) {
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
                "Welcome Back",
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                "Enter your credentials to continue",
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
              PrimaryButton(
                text: "Login",
                onPressed: () {
                  print("Login button pressed");
                  _handleLogin();
                },
              ),
              const SizedBox(height: 16),
              Center(
                child: TextButton(
                  onPressed: () => Navigator.pushNamed(context, '/signup'),
                  child: const Text("Don't have an account? Sign Up"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
