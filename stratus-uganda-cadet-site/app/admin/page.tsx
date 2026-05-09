'use client';
import { useEffect, useState } from 'react';

type App = { id?: string; created_at?: string; fullName?: string; phone?: string; email?: string; citizenship?: string; age?: string; education?: string; status?: string };

export default function Admin(){
  const [password,setPassword]=useState('');
  const [authed,setAuthed]=useState(false);
  const [rows,setRows]=useState<App[]>([]);
  async function login(){
    const r=await fetch('/api/admin?password='+encodeURIComponent(password));
    if(r.ok){setAuthed(true);setRows(await r.json())}else alert('Wrong password or admin API not configured');
  }
  if(!authed)return <main className="admin"><div className="container"><h1>Stratus Admin</h1><p className="muted">Enter admin password to view applications.</p><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Admin password"/><button className="btn primary" onClick={login} style={{marginLeft:12}}>Login</button></div></main>;
  return <main className="admin"><div className="container"><h1>Cadet Applications</h1><table className="table"><thead><tr><th>Date</th><th>Name</th><th>Phone</th><th>Email</th><th>Citizenship</th><th>Age</th><th>Education</th><th>Status</th></tr></thead><tbody>{rows.map((r,i)=><tr key={r.id||i}><td>{r.created_at?.slice(0,10)}</td><td>{r.fullName}</td><td>{r.phone}</td><td>{r.email}</td><td>{r.citizenship}</td><td>{r.age}</td><td>{r.education}</td><td>{r.status}</td></tr>)}</tbody></table></div></main>
}
