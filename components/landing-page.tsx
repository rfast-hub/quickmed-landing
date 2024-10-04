'use client'

import { useState } from 'react'
import { ArrowRight, Upload, Brain, Clipboard, TrendingUp, Shield, Star, Menu, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const testimonials = [
    {
      text: "Quick Med has completely changed the way I manage my health. The AI insights are spot on, and the workout plan has helped me get in the best shape of my life.",
      author: "John D."
    },
    {
      text: "I love how easy it is to use. I upload my data, and within minutes I get personalized health advice tailored just for me!",
      author: "Sarah M."
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Submitted email:', email)
    // Reset the email input
    setEmail('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Quick Med
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <Link href="/login" passHref>
                <Button variant="outline" className="ml-2">Log In</Button>
              </Link>
              <div>
                <a href="https://quickmed-login-ryanfastiggi123.replit.app/" target="_blank" rel="noopener noreferrer">
                  <button className="login-button">Login</button>
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-2">
              <Link href="/features" className="block py-2 text-gray-600 hover:text-blue-600">Features</Link>
              <a href="#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <Link href="/login" passHref>
                <Button variant="outline" className="w-full mt-2">Log In</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button className="w-full mt-2">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Revolutionize Your Health with AI-Powered Precision
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Quick Med offers personalized health insights, tailored nutrition plans, and workout recommendations—all powered by cutting-edge AI technology.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
          <p className="mt-4 text-sm">
            Upload your health data, let AI analyze it, and receive personalized recommendations that are scientifically designed for your wellness goals.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Upload />, title: "Upload Your Health Data", description: "Easily input your bloodwork, age, gender, weight, and height." },
              { icon: <Brain />, title: "AI-Powered Analysis", description: "Our AI instantly processes your data to provide actionable health insights." },
              { icon: <Clipboard />, title: "Receive Personalized Plans", description: "Get tailored recommendations for supplements, nutrition, and workouts designed just for you." },
              { icon: <TrendingUp />, title: "Track Progress", description: "Update your data regularly and let Quick Med refine your plan to keep you on track." },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive, AI-Driven Features at Your Fingertips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Personalized Health Analysis", description: "Advanced AI analyzes your bloodwork and physical data to create a detailed health report." },
              { title: "Tailored Supplement & Nutrition Plans", description: "Get custom dietary advice based on your health profile and goals." },
              { title: "Interactive 3D Pain Model", description: "Pinpoint areas of discomfort, and let AI provide potential diagnoses and treatment plans." },
              { title: "Workout Plans Customized for You", description: "Receive exercises suited to your body type, fitness level, and health goals." },
              { title: "Progress Tracking & Adaptive Recommendations", description: "Monitor your health over time and get continuously refined suggestions." },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Starter", 
                price: "Free", 
                features: [
                  "Calorie Counter",
                  "Health Chatbot",
                ],
                cta: "Start Free"
              },
              {
                title: "Pro",
                price: "$15/month",
                features: [
                  "All Starter features",
                  "Customized Nutrition Plans",
                  "Personalized Workout Plans",
                ],
                cta: "Go Pro"
              },
              {
                title: "Elite",
                price: "$30/month",
                features: [
                  "All Pro features",
                  "AI Bloodwork Analysis",
                  "AI Physical Analysis",
                  "Personalized AI Video Instructions",
                  "Personalized AI Image Instructions",
                ],
                cta: "Get Elite"
              }
            ].map((plan, index) => (
              <Card key={index} className={index === 1 ? "border-blue-500 border-2" : ""}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                  <CardDescription className="text-xl font-semibold">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{plan.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Quick Med?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Brain />, title: "AI-Powered Precision", description: "Cutting-edge algorithms ensure that your recommendations are based on the latest health science." },
              { icon: <TrendingUp />, title: "Time-Saving & Convenient", description: "No more guesswork—Quick Med offers instant, actionable insights that help you make informed decisions about your health." },
              { icon: <Clipboard />, title: "Comprehensive Health Monitoring", description: "Track and improve your well-being over time, with adaptive plans that evolve as your health changes." },
              { icon: <Shield />, title: "Data Security & Privacy", description: "Your health data is secure, encrypted, and fully compliant with industry regulations." },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hear from Our Users</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-xl mb-4">"{testimonials[currentTestimonial].text}"</p>
                  <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                </div>
                <div className="flex justify-center mt-6">
                  {testimonials.map((_, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`mx-1 ${currentTestimonial === index ? 'text-blue-600' : 'text-gray-400'}`}
                      onClick={() => setCurrentTestimonial(index)}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2023 Quick Med. All rights reserved.</p>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}