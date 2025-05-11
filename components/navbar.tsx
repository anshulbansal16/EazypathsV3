"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <div className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and menu */}
          <div className="flex items-center gap-4">
            <Logo />
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-accent rounded-md"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/bmi-analysis" className="nav-link">BMI Analysis</Link>
            <Link href="/ai-reports" className="nav-link">AI Reports</Link>
            <Link href="/health-assistant" className="nav-link">Health Assistant</Link>
            <ThemeToggle />
            <Button asChild className="login-btn">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/bmi-analysis" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>BMI Analysis</Link>
            <Link href="/ai-reports" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>AI Reports</Link>
            <Link href="/health-assistant" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Health Assistant</Link>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-sm font-medium">Theme</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => { setTheme("light"); setIsMenuOpen(false); }} className="border-primary/20 bg-background text-foreground"><Sun className="h-4 w-4" /></Button>
                <Button variant="outline" size="sm" onClick={() => { setTheme("dark"); setIsMenuOpen(false); }} className="border-primary/20 bg-background text-foreground"><Moon className="h-4 w-4" /></Button>
              </div>
            </div>
            <div className="px-3 pt-2">
              <Button asChild className="w-full login-btn" onClick={() => setIsMenuOpen(false)}>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
