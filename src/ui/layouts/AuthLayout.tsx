"use client";

import { useState } from "react";
import Login from "@/pages/Login";
import SignUp from "@/pages/Signup";
import CreativeBackground from "@/ui/CreativeBackground";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-primary/10 overflow-hidden">
      <CreativeBackground />
      <div className="z-10 space-y-8">
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setIsLogin(true)}
            variant={isLogin ? "default" : "outline"}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Login</span>
            {isLogin && (
              <motion.div
                className="absolute inset-0 bg-primary"
                layoutId="activeTab"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </Button>
          <Button
            onClick={() => setIsLogin(false)}
            variant={!isLogin ? "default" : "outline"}
            className="relative overflow-hidden group"
          >
            <span className="relative z-10">Sign Up</span>
            {!isLogin && (
              <motion.div
                className="absolute inset-0 bg-primary"
                layoutId="activeTab"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </Button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {isLogin ? <Login /> : <SignUp />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
