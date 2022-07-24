
import { useState } from "react";
import { InputLabel, Input, FormGroup, Box, FormControl } from "@mui/material";

export default function CreateAcctInput() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <FormControl
        sx={{
          width: '45%',
          marginRight: '1rem',
          marginBottom: '1rem',
        }}
      >
      <InputLabel htmlFor="firstName">First Name</InputLabel>
      <Input
        sx={{
          borderRadius: '10px',
          fontWeight: 'bold',
          color: '#3f51b5',
          backgroundColor: '#D8D8D8',
        }}
        id="firstName"
        value={firstName}
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
      />
      </FormControl>
    
        <FormControl
          sx={{
            width: '45%',
          }}
        >
      <InputLabel htmlFor="lastName">Last Name</InputLabel>
      <Input
        sx={{
          borderRadius: '10px',
          fontWeight: 'bold',
          color: '#3f51b5',
          backgroundColor: '#D8D8D8',
        }}
        id="lastName"
        value={lastName}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
      />
      </FormControl>
    </Box>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <FormControl
        sx={{ 
          width: '100%',
          marginBottom: '1rem',
        }}
      >
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input
        sx={{
          borderRadius: '10px',
          fontWeight: 'bold',
          color: '#3f51b5',
          backgroundColor: '#D8D8D8',
        }}
        id="username"
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      </FormControl>
    </Box>

    <FormControl
        sx={{
          width: '100%',
          marginBottom: '1rem',
        }}
      >
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input
        sx={{ 
          borderRadius: '10px',
          fontWeight: 'bold',
          color: '#3f51b5',
          backgroundColor: '#D8D8D8',
        }}
        id="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      </FormControl>

    <FormControl
        sx={{ 
          width: '100%',
        }}
      >
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        sx={{
          borderRadius: '10px',
          fontWeight: 'bold',
          color: '#3f51b5',
          backgroundColor: '#D8D8D8',
        }}
        id="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </FormControl>
      
    </div>
  );
}

