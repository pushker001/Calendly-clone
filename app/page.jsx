import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center h-screen bg"> 
      <div className="bg-zinc-500 p-5 m-auto rounded-md">
      <h1 className="text-7xl font-bold mb-5 ">Calendly</h1>
      <p className="mb-5">the smart scheduling app for seamless meetings, tasks, and reminders. Stay organized effortlessly!</p>
      <Link href={'/dashboard'}>
      <Button>Get Started</Button>
      </Link>
      </div>
    </div>
  );
};

export default Home;
