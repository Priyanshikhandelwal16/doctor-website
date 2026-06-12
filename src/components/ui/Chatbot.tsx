"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Heart, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
  isHtml?: boolean;
}

const quickOptions = [
  { label: "Book Appointment", value: "appointment" },
  { label: "Cardiac Emergency Info", value: "emergency" },
  { label: "Clinic Timings & Location", value: "location" },
  { label: "Dr. Mehta's Profile", value: "doctor" },
  { label: "Consultation Fees", value: "fees" },
  { label: "Insurance & CGHS Cashless", value: "insurance" },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Namaste! 🙏 I am Hrida, Dr. Arjun Mehta's AI cardiac assistant. How can I help you today with your heart care?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("emergency") || q.includes("chest pain") || q.includes("pain") || q.includes("heart attack") || q.includes("breathing") || q.includes("ambulance")) {
      return "🚨 <strong>CRITICAL EMERGENCY:</strong> If you or someone nearby is experiencing crushing chest pain, tightness, jaw/arm pain, or breathlessness, please chew a 325mg Aspirin if not allergic and call our <strong>24/7 Cardiac Emergency Helpline at <a href='tel:+919829012345' class='text-accent-red underline font-bold'>+91 98290 12345</a></strong> immediately. Do not drive yourself; our emergency team will guide you.";
    }
    
    if (q.includes("appointment") || q.includes("book") || q.includes("slot") || q.includes("consult") || q.includes("register")) {
      return "You can easily schedule a consultation with Dr. Arjun Mehta online. Choose your preferred slot and consultation type (in-clinic or video call) here: <a href='/appointment' class='text-medical-blue underline font-bold'>Book Appointment Online</a>.";
    }

    if (q.includes("location") || q.includes("address") || q.includes("where") || q.includes("map") || q.includes("jaipur")) {
      return "HeartCare Advanced Cardiac Centre is situated at: <br/><strong>3rd Floor, C-Scheme Medical Plaza, Bhagwan Das Road, Jaipur, Rajasthan 302001 (Near Statue Circle)</strong>. <br/>You can view the full map on our <a href='/contact' class='text-medical-blue underline font-bold'>Contact Page</a>.";
    }

    if (q.includes("timings") || q.includes("hours") || q.includes("time") || q.includes("open") || q.includes("sunday")) {
      return "Our consulting hours are:<br/>- <strong>Mon – Sat: 9:00 AM – 7:00 PM</strong><br/>- <strong>Sunday: Emergency Only (10:00 AM – 2:00 PM)</strong><br/>Our Cardiac Emergency team and Cath Lab are operational <strong>24/7</strong>.";
    }

    if (q.includes("doctor") || q.includes("profile") || q.includes("arjun") || q.includes("mehta") || q.includes("experience")) {
      return "Dr. Arjun Mehta is a premier Interventional Cardiologist with over <strong>18 years of experience</strong> and 15,000+ successful procedures. He trained at <strong>AIIMS New Delhi</strong>, <strong>CMC Vellore</strong>, and Mount Sinai, New York. Read his full story on our <a href='/about' class='text-medical-blue underline font-bold'>About Page</a>.";
    }

    if (q.includes("fees") || q.includes("cost") || q.includes("charge") || q.includes("price") || q.includes("rupees")) {
      return "Consultation fee structure:<br/>- Initial Consultation: <strong>₹1,500</strong><br/>- Follow-up Consultation: <strong>₹1,000</strong><br/>- Preventive Health Package: <strong>₹4,500</strong> (Includes consultation, ECG, and Echocardiography).";
    }

    if (q.includes("insurance") || q.includes("cashless") || q.includes("cghs") || q.includes("esi") || q.includes("star")) {
      return "Yes, we offer <strong>cashless treatments</strong>. We are empanelled with major health insurance companies (Star Health, HDFC Ergo, ICICI Lombard, etc.) as well as government benefit systems like CGHS and ESI. Our helpdesk coordinates all documentation.";
    }

    if (q.includes("angioplasty") || q.includes("stent") || q.includes("blockage") || q.includes("cath lab")) {
      return "Dr. Mehta specializes in biplane coronary angioplasty & stenting. We utilize state-of-the-art Cath Lab tech with intravascular imaging (IVUS) to secure high success rates (current track record: <strong>98.7%</strong>). Typical hospital stay is 1-2 days.";
    }

    if (q.includes("diet") || q.includes("food") || q.includes("cholesterol") || q.includes("bp") || q.includes("sugar")) {
      return "We offer Rajasthan-specific heart-healthy dietary plans and customized programs for blood pressure/cholesterol control. Check out Dr. Mehta's evidence-based write-ups on our <a href='/blog' class='text-medical-blue underline font-bold'>Heart Health Blog</a>.";
    }

    return "Thank you for reaching out. I can assist you with booking links, emergency support, consulting hours, clinic location in Jaipur, fees, and procedures. What would you like to know about?";
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        sender: "bot",
        text: getBotResponse(textToSend),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isHtml: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-32 left-4 md:left-auto md:bottom-20 md:right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-premium-lg transition-all hover:scale-110",
          isOpen ? "bg-accent-red rotate-90" : "bg-navy hover:bg-navy-700"
        )}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6 text-medical-blue" fill="currentColor" />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-48 left-4 right-4 md:left-auto md:bottom-36 md:right-4 z-50 flex h-[460px] w-[calc(100%-2rem)] md:w-96 flex-col overflow-hidden rounded-2xl border border-medical-silver-light bg-white shadow-premium-lg animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-medical-blue/20">
                <Heart className="h-4 w-4 text-medical-blue animate-pulse-heart" fill="currentColor" />
              </div>
              <div>
                <p className="font-display text-sm font-bold">Hrida AI</p>
                <p className="text-[10px] text-medical-silver">Cardiac Support Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded p-1 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto bg-medical-white p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                  msg.sender === "user"
                    ? "ml-auto bg-medical-blue text-white rounded-br-none"
                    : "bg-white text-navy border border-medical-silver-light rounded-bl-none shadow-sm"
                )}
              >
                {msg.isHtml ? (
                  <p
                    className="leading-relaxed chatbot-html"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                ) : (
                  <p className="leading-relaxed">{msg.text}</p>
                )}
                <span className={cn("mt-1 text-[9px] text-right block", msg.sender === "user" ? "text-white/60" : "text-navy-400")}>
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex max-w-[50px] items-center justify-center gap-1 rounded-xl bg-white border border-medical-silver-light p-2.5 shadow-sm">
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-medical-blue" />
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-medical-blue [animation-delay:0.2s]" />
                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-medical-blue [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick reply options */}
          <div className="border-t border-medical-silver-light bg-white p-2">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-medical-silver">
              {quickOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSend(opt.label)}
                  className="shrink-0 rounded-full border border-medical-blue/30 bg-medical-blue-light/30 px-3 py-1 text-xs font-medium text-medical-blue transition-all hover:bg-medical-blue hover:text-white"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2 border-t border-medical-silver-light bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Hrida about clinic, packages, heart symptoms..."
              className="flex-1 rounded-xl border border-medical-silver-light px-3 py-2 text-xs focus:border-medical-blue focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-navy text-white hover:bg-navy-700 active:scale-95"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
