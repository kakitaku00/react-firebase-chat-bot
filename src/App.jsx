import React, { useState, useEffect, useCallback } from "react";
import "./assets/styles/style.css";
import { AnswersList, Chats, Loading } from "./components/index";
import { FormDialog } from "./components/Forms/index";

import { db } from "./firebase/index";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    // 選択された回答と次の質問をチャットに追加
    addChats({
      text: nextDataset.question,
      type: "question",
    });
    // 次の回答一覧をセット
    setAnswers(nextDataset.answers);
    // 現在の質問IDをセット
    setCurrentId(nextQuestionId);
  };

  const selectAnswer = useCallback(
    (selectedAnswer, nextQuestionId) => {
      switch (true) {
        case /^https:*/.test(nextQuestionId):
          const a = document.createElement("a");
          a.href = nextQuestionId;
          a.target = "_blank";
          a.click();
          break;
        case nextQuestionId === "contact":
          handleOpen();
          break;
        default:
          addChats({
            text: selectedAnswer,
            type: "answer",
          });
          setTimeout(
            () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
            500
          );

          break;
      }
    },
    [answers]
  );

  const addChats = (chat) => {
    // 引数で前回までの状態を取得できる
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  useEffect(() => {
    (async () => {
      const initDataset = {};

      // Fetch questions dataset from Firestore
      await db
        .collection("question")
        .get()
        .then((snapshots) => {
          snapshots.forEach((doc) => {
            initDataset[doc.id] = doc.data();
          });
        });

      // Firestoreから取得したデータセットを反映
      setDataset(initDataset);

      // 最初の質問を表示
      displayNextQuestion(currentId, initDataset[currentId]);
    })();
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <section className="c-section">
      <div className="c-box">
        {Object.keys(dataset).length === 0 ? (
          <Loading />
        ) : (
          <>
            <Chats chats={chats} />
            <AnswersList answers={answers} select={selectAnswer} />
          </>
        )}
        <FormDialog
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </div>
    </section>
  );
};

export default App;
