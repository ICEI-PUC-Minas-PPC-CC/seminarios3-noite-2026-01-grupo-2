const transcription = document.getElementById("transcription");

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const clearBtn = document.getElementById("clearBtn");

const statusText = document.getElementById("status");

let recognition;

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

if (!SpeechRecognition) {

  alert("Seu navegador não suporta reconhecimento de voz.");

} else {

  recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";

  recognition.continuous = true;

  recognition.interimResults = true;

  recognition.onstart = () => {

    statusText.innerText = "🎙️ Ouvindo...";
  };

  recognition.onend = () => {

    statusText.innerText = "⛔ Captura encerrada.";
  };

  recognition.onerror = (event) => {

    statusText.innerText =
      "Erro: " + event.error;
  };

 recognition.onresult = (event) => {

  for (
    let i = event.resultIndex;
    i < event.results.length;
    i++
  ) {

    if (event.results[i].isFinal) {

      const transcript =
        event.results[i][0].transcript;

      transcription.innerText +=
        transcript + "\n";
    }
  }
};

  startBtn.addEventListener("click", () => {

    recognition.start();
  });

  stopBtn.addEventListener("click", () => {

    recognition.stop();
  });

  clearBtn.addEventListener("click", () => {

    transcription.innerText = "";
  });
}