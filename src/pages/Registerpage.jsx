import { useState } from 'react';

export default function Registerpage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
 async  function Register(ev) {
   ev.preventDefault();
await fetch("https://api.rb-actionaction.repl.co/register",{
	method:"POST",
	body:JSON.stringify({username, password}),
        headers:{     "Content-Type":"application/json"},
})
}

	return (
		<form className="register" onSubmit={Register}>
			<h1>Register</h1>			<input type='text' placeholder='username'
value={username} onChange={ev =>setUsername(ev.target.value)} />
			<input type='password' placeholder='password' 
value={password} onChange={ev=>setPassword(ev.target.value)}				/>
			<button>Rigster</button>
		</form>
	)
}






















