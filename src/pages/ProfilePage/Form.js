import {
  Modal,
  FormControl,
  Input,
  InputLabel,
  Button,
  Typography,
  Box,
  TextareaAutosize,
  Card
} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function Form(props) {
  const { open, handleClose } = props;

  return (
    <Modal open={open} onClose={handleClose}>
       
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '50%',
          height: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          background: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          alignText: 'center',
          borderRadius: '10%',
          padding: '10px'
        }}
      >
            <Typography sx={{
                fontSize: '40px',
                width: '75%',
                alignText: 'center'
            }}>Submit a New Project</Typography>
            <FormControl sx={{
                margin: 'px'
            }}>
              <InputLabel htmlFor="projectname">Project Name</InputLabel>
              <Input id="projectname" aria-describedby="ProjectName"></Input>
            </FormControl>
         
            
            <FormControl sx={{
                margin: '20px'
            }}>
              <InputLabel htmlFor="contributors">Contributors </InputLabel>
              <Input id="projectname" aria-describedby="ProjectName"></Input>
            </FormControl>
         
            
            <FormControl sx={{
                margin: '20px'
            }}>
              <InputLabel htmlFor="summary">Brief Summary</InputLabel>
              <TextareaAutosize minRows={4} />
            </FormControl>
         
            
            <FormControl sx={{
                margin: '20px'
            }}>
              <InputLabel htmlFor="description">Full Description</InputLabel>
              <TextareaAutosize minRows={4} />
            </FormControl>
         
            
          <FormControl sx={{
                margin: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
              <Typography htmlFor="photoupload">Upload a Photo</Typography>
              <FileUploadIcon/>
            </FormControl>
         
       
        <Button variant='contained' onClick={handleClose} sx={{
           fontSize: '20px'
        }}>
            Submit
        </Button>
      </Box>
    </Modal>
  );
}
