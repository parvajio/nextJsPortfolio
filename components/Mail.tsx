"use client"

import { useState } from "react"
import { CardSpotlight } from "./ui/card-spotlight"
import { Icon } from "./ui/evervault-card"
import { MailIcon, MapPin, Phone, Copy, CheckCheck } from "lucide-react"

const Mail = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = [
    {
      id: "email",
      icon: <MailIcon className="w-5 h-5" />,
      value: "mdparvajmosharof17@gmail.com",
      label: "Email",
    },
    {
      id: "location",
      icon: <MapPin className="w-5 h-5" />,
      value: "Uttara, Dhaka, Bangladesh",
      label: "Location",
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5" />,
      value: "+880-1400139998",
      label: "Phone",
    },
  ]

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="flex-1 border border-white/[0.2] flex flex-col items-start max-w-sm relative h-[20rem] bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -left-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -top-1.5 -right-1.5 text-white z-10" />
      <Icon className="absolute h-6 w-6 -bottom-1.5 -right-1.5 text-white z-10" />

      {/* Decorative elements */}
      <div className="absolute w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

      {/* CARD CONTENT */}
      <CardSpotlight className="flex flex-col justify-center p-3 w-full h-full">
        <div className="w-full">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p className="text-2xl font-bold relative z-20 text-white">Contact Information</p>
          </div>

          <div className="space-y-2 z-20 relative">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-between p-1 rounded-lg transition-all hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/60">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(item.value, item.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full"
                  aria-label={`Copy ${item.label}`}
                >
                  {copied === item.id ? (
                    <CheckCheck className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/70" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div className="text-xs text-white/90 italic pr-3">Let&apos;s connect</div>
        </div>
      </CardSpotlight>
    </div>
  )
}

export default Mail

