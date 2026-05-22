"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock, Phone, Send, Sparkles, UserRound } from "lucide-react";

const phoneNumber = "+12408285997";
const textRequestNumber = "+12409297785";

const services = [
  "Classic manicure",
  "Gel manicure",
  "Gel-X or acrylic set",
  "Spa or jelly pedicure",
  "Lash services",
  "Custom nail art",
];

const teamMembers = [
  "Mimi",
  "Thomas",
  "Teddy",
  "Janeya",
  "Joselyn",
  "Maria",
];

const weekdaySlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];

const saturdaySlots = ["9:30 AM", ...weekdaySlots];
const sundaySlots = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
];

function getLocalDateValue(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

  return date.toISOString().slice(0, 10);
}

function getSlotsForDate(dateValue: string) {
  if (!dateValue) {
    return weekdaySlots;
  }

  const date = new Date(`${dateValue}T12:00:00`);
  const day = date.getDay();

  if (day === 0) {
    return sundaySlots;
  }

  if (day === 6) {
    return saturdaySlots;
  }

  return weekdaySlots;
}

export default function BookingSection() {
  const today = getLocalDateValue();
  const [service, setService] = useState(services[1]);
  const [teamMember, setTeamMember] = useState(teamMembers[0]);
  const [date, setDate] = useState(today);
  const availableSlots = useMemo(() => getSlotsForDate(date), [date]);
  const [timeSlot, setTimeSlot] = useState(availableSlots[0]);

  const selectedSlot = availableSlots.includes(timeSlot) ? timeSlot : availableSlots[0];
  const message = `Hi Me Nails & More, I found you on your website and I'm interested in booking ${service} with ${teamMember} on ${date} at ${selectedSlot}. Please let me know if this time is available.`;
  const smsHref = `sms:${textRequestNumber}?body=${encodeURIComponent(message)}`;

  return (
    <section className="booking-section" id="booking">
      <div className="booking-copy">
        <p className="eyebrow">Book an appointment</p>
        <h2>Choose your tech, date, and time.</h2>
        <p>
          Send the salon your preferred service and slot. The team can confirm timing, tech availability,
          and same-time services by phone or text.
        </p>
        <div className="booking-proof" aria-label="Booking notes">
          <span>
            <Sparkles aria-hidden="true" />
            Walk-ins welcome
          </span>
          <span>
            <UserRound aria-hidden="true" />
            Named tech by request
          </span>
          <span>
            <Clock aria-hidden="true" />
            Open every day
          </span>
        </div>
      </div>

      <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
        <div className="booking-field">
          <label htmlFor="booking-service">Service</label>
          <select id="booking-service" value={service} onChange={(event) => setService(event.target.value)}>
            {services.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-tech">Preferred tech</label>
          <select id="booking-tech" value={teamMember} onChange={(event) => setTeamMember(event.target.value)}>
            {teamMembers.map((member) => (
              <option key={member}>{member}</option>
            ))}
          </select>
        </div>

        <div className="booking-field">
          <label htmlFor="booking-date">Date</label>
          <input id="booking-date" min={today} type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </div>

        <div className="booking-field">
          <label htmlFor="booking-time">Time slot</label>
          <select id="booking-time" value={selectedSlot} onChange={(event) => setTimeSlot(event.target.value)}>
            {availableSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="booking-summary" aria-live="polite">
          <span>Request preview</span>
          <p>{message}</p>
        </div>

        <div className="booking-actions">
          <a className="primary-link" href={smsHref}>
            <Send className="site-icon" aria-hidden="true" />
            Text request
          </a>
          <a className="secondary-dark-link" href={`tel:${phoneNumber}`}>
            <Phone className="site-icon" aria-hidden="true" />
            Call {phoneNumber}
          </a>
        </div>

        <p className="booking-footnote">
          <CalendarDays aria-hidden="true" />
          Requests are confirmed by the salon before the appointment is final.
        </p>
      </form>
    </section>
  );
}
