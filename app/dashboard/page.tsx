"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../.next/firebase"; // ← これが正解

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        window.location.href = "/login";
      }
    });

    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  if (!user) return <p>読み込み中...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>ダッシュボード</h1>
      <p>ログイン中: {user.email}</p>

      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
}
