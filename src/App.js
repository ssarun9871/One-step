import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s)=> s-1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s+1);
  }

  return (
    <div>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              bgcolor= "#7950f2" 
              textcolor="#fff" 
              onClick={handlePrevious}
              text="Previous"
              emoji="👌"
            />
            <Button
              bgcolor= "#7950f2" 
              textcolor="#fff" 
              onClick={handleNext}
              text="Next"
              emoji="🤞"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Button ({textcolor, bgcolor, onClick, text,emoji}){
  return (
    <button
    style={{
      backgroundColor: bgcolor,
      color:textcolor,
    }}
    onClick={onClick}
    ><span>{emoji}</span>{ text}</button>
  )
} 