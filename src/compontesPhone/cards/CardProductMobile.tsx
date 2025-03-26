'use client';
import { useState } from 'react';
import { ICardProductProps } from '@/shared/interfaces/components/cards/CardProduct.interface';

const CardProductMobile = ({
  title,
  description,
  amountEur,
  savings = 0,
  popular = false,
  isButtonEnabled = false,
  onSubscribe,
}: ICardProductProps) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const formattedValue = (amountEur * (1 - savings) / 100).toFixed(2).replace('.', ',');

  const bgColor = popular ? 'bg-color2' : 'bg-color3';
  const textColor = popular ? 'text-text1' : 'text-text3';
  const borderColor = popular ? 'border-text1' : 'border-text3';
  const buttonBg = popular ? 'bg-text1' : 'bg-text3';
  const buttonText = popular ? 'text-color2' : 'text-color3';
  const buttonHoverBg = popular ? 'hover:bg-color2' : 'hover:bg-color3';
  const buttonHoverText = popular ? 'hover:text-text1' : 'hover:text-text3';
  const borderButtonColor = popular ? 'border-text1' : 'border-text3';

  return (
    <div className={`${bgColor} p-4 border-2 ${borderColor} rounded-3xl flex flex-col items-center w-full`}>
      <h1 className={`${textColor} text-2xl font-bold text-center`}>{title}</h1>
      {savings > 0 ? (
        <div className="text-center mt-4">
          <p className={`text-lg line-through ${textColor}`}>
            {(amountEur / 100).toFixed(2).replace('.', ',')} €
          </p>
          <p className={`${textColor} font-bold text-5xl`}>
            {formattedValue} €
          </p>
          <p className={`${textColor} text-center mt-2 font-bold text-xl`}>
            Ahorra un {Math.round(savings * 100)}% 🎉
          </p>
        </div>
      ) : (
        <p className={`${textColor} text-center mt-4 font-bold text-5xl`}>
          {formattedValue} €
        </p>
      )}

      {isListVisible && (
        <ul className="flex flex-col list-none mt-8 gap-4">
          {description.map(({ status, message }: { status: number; message: string }) => (
            <li key={message} className={`${textColor} flex items-center`}>
              {status === 1 ? (
                <svg
                  className="w-8 h-8 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 mr-2 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
              {message}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-4 mt-4">
        {isButtonEnabled && (
          <button
            className={`py-1.5 px-4 rounded-3xl border-2 ${borderButtonColor} ${buttonBg} ${buttonText} ${buttonHoverBg} ${buttonHoverText} transition duration-300`}
            onClick={() => onSubscribe && onSubscribe()}
          >
            Suscribirse
          </button>
        )}

        {isListVisible ?  (
          <button
            className="py-1.5 px-4 rounded-3xl border-2 border-text3 hover:bg-color3 hover:text-text1 transition duration-300"
            onClick={() => setIsListVisible(false)}
          >
            Ver menos
          </button>
        ):
        (
          <button
            className=" text-text3 py-1.5 px-4 rounded-3xl border-2 border-text3 hover:bg-color3 hover:text-text1 transition duration-300"
            onClick={() => setIsListVisible(true)}
          >
            Ver más
          </button>
        )

        }

      </div>
    </div>
  );
};

export default CardProductMobile;
