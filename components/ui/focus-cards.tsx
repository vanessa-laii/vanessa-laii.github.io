"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
  }: {
    card: any;
    index: number;
  }) => (
    <div
      className="rounded-lg relative overflow-hidden h-96 w-full border border-gray-200"
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-2/5"
      />
      <div className="absolute inset-0 flex items-end py-8 px-4">
        <div className="w-full">
          <div className="text-xl md:text-2xl font-medium text-black mb-2">
            {card.title}
          </div>
          {card.subtitle && (
            <div className="text-sm md:text-base text-gray-600">
              {card.subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  subtitle?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
        />
      ))}
    </div>
  );
}
