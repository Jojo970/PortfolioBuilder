import { Formik } from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone";
import {EditOutlined} from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";
import { useSelector } from "react-redux";
import { useState } from "react";
import { 
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import SentForm from '../sentFormComponents/SentForm';


const schema = yup.object().shape({
  websiteTitle:yup.string().required("required"),
  name: yup.string().required("required"),
  aboutMe: yup.string().required("required"),
  profilePicture: yup.string().required("required"),
  email:yup.string().email("invalid email").required("required"),
  linkedIn:yup.string().required("required"),
  github:yup.string().required("required"),
  projectName: yup.string().required('required'),
  picture: yup.string().required("required"),
  description: yup.string().required("required"),
  liveLink:yup.string().required("required"),
  githubLink:yup.string().required("required"),
  projectNameTwo: yup.string().required('required'),
  pictureTwo: yup.string().required("required"),
  descriptionTwo: yup.string().required("required"),
  liveLinkTwo:yup.string().required("required"),
  githubLinkTwo:yup.string().required("required"),
});

const initialValues = {
  websiteTitle:'',
  name: '',
  aboutMe: '',
  profilePicture: '',
  email: '',
  linkedIn: '',
  github: '',
  projectName: '', 
  picture: '',
  description: '',
  liveLink:'',
  githubLink:'',
  projectNameTwo: '', 
  pictureTwo: '',
  descriptionTwo: '',
  liveLinkTwo:'',
  githubLinkTwo:'',
};

const TwoProject = ({ setDownloadLink, setReceivedFiles}) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const [sentParameter, setSentParameter] = useState(false);

  const handleFormSubmit = async (values, onSubmitProps) => {

    setSentParameter(true);

    const projects = [{
        projectName: values.projectName, 
        picture: values.picture,
        picturePath: values.picture.name,
        description: values.description,
        liveLink: values.liveLink,
        githubLink: values.githubLink
    },{
        projectName: values.projectNameTwo, 
        picture: values.pictureTwo,
        picturePath: values.pictureTwo.name,
        description: values.descriptionTwo,
        liveLink: values.liveLinkTwo,
        githubLink: values.githubLinkTwo
    },]

    const formData = new FormData();
    formData.append('userId',_id)
    
    for (let value in values) {
        if (value === 'projectName') {
            break;
        }
        formData.append(value, values[value]);
    }
        
    formData.append('projects', JSON.stringify(projects));
    formData.append('profilePicturePath', values.profilePicture.name);
    projects.forEach((project) => {

        formData.append(`projectImages`, project.picture);
    })
    
    const response = await fetch(
        "/webpages/createpost",
        {
        method: "POST",
        body: formData
        }
    );

    const responseData = await response.blob();

    const url = await URL.createObjectURL(responseData);

    setDownloadLink(url);
    setReceivedFiles(true);

    onSubmitProps.resetForm();
    }

  return (
    <>
    {sentParameter ? (
        <SentForm />
    ): (
    <Formik
            onSubmit = {handleFormSubmit}
            initialValues = {initialValues}
            validationSchema = {schema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) =>(
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns= "repeat(4, minmax(0, 1fr))"
                        sx ={{
                            "& > div":{ gridColumn: isNonMobile ? undefined : "span 4"}
                        }}
                    >
                                <Typography
                                fontWeight="500" 
                                variant="h5" 
                                sx = {{
                                    mb: "1rem",
                                    mt: "1.5rem",
                                    gridColumn: "span 4"
                                    }}>
                                Website/Personal Info
                                </Typography>
                                <TextField 
                                    label = "Website Title"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.websiteTitle}
                                    name = "websiteTitle"
                                    error = {Boolean(touched.websiteTitle) && Boolean(errors.websiteTitle)}
                                    helperText = {touched.websiteTitle && errors.websiteTitle}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.name}
                                    name = "name"
                                    error = {Boolean(touched.name) && Boolean(errors.name)}
                                    helperText = {touched.name && errors.name}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "About Me"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.aboutMe}
                                    name = "aboutMe"
                                    error = {Boolean(touched.aboutMe) && Boolean(errors.aboutMe)}
                                    helperText = {touched.aboutMe && errors.aboutMe}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    label = "Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.email}
                                    name = "email"
                                    error = {Boolean(touched.email) && Boolean(errors.email)}
                                    helperText = {touched.email && errors.email}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "LinkedIn"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.linkedIn}
                                    name = "linkedIn"
                                    error = {Boolean(touched.linkedIn) && Boolean(errors.linkedIn)}
                                    helperText = {touched.linkedIn && errors.linkedIn}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Github"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.github}
                                    name = "github"
                                    error = {Boolean(touched.github) && Boolean(errors.github)}
                                    helperText = {touched.github && errors.github}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <Box
                                    gridColumn="span 2"
                                    border = {`1px solid ${palette.neutral.light}`}
                                    borderRadius = "5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles = ".jpg, .jpeg, .png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) => {
                                            setFieldValue("profilePicture", acceptedFiles[0])
                                        }}
                                    >
                                        {({getRootProps, getInputProps}) =>(
                                            <Box
                                                {...getRootProps()}
                                                border= {`2px dashed ${palette.primary.main}`}
                                                p = "1rem"
                                                sx={{
                                                    "&:hover": {cursor: "pointer"}
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                { !values.profilePicture ? (
                                                    <p>Add Profile Picture Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>{values.profilePicture.name}</Typography>
                                                        <EditOutlined />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}

                                    </Dropzone>
                                </Box>

                                {/* Project 1 */}
                                <Typography
                                fontWeight="500" 
                                variant="h5" 
                                sx = {{
                                    mb: "1rem",
                                    mt: "1.5rem",
                                    gridColumn: "span 4"
                                    }}>
                                Project #1
                                </Typography>
                                <TextField 
                                    label = "Project Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.projectName}
                                    name = "projectName"
                                    error = {Boolean(touched.projectName) && Boolean(errors.projectName)}
                                    helperText = {touched.projectName && errors.projectName}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Project Github Repo"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.githubLink}
                                    name = "githubLink"
                                    error = {Boolean(touched.githubLink) && Boolean(errors.githubLink)}
                                    helperText = {touched.githubLink && errors.githubLink}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Project Description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.description}
                                    name = "description"
                                    error = {Boolean(touched.description) && Boolean(errors.description)}
                                    helperText = {touched.description && errors.description}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    label = "Link to Live Site"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.liveLink}
                                    name = "liveLink"
                                    error = {Boolean(touched.liveLink) && Boolean(errors.liveLink)}
                                    helperText = {touched.liveLink && errors.liveLink}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <Box
                                    gridColumn="span 2"
                                    border = {`1px solid ${palette.neutral.light}`}
                                    borderRadius = "5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles = ".jpg, .jpeg, .png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) => {
                                            setFieldValue("picture", acceptedFiles[0])
                                        }}
                                    >
                                        {({getRootProps, getInputProps}) =>(
                                            <Box
                                                {...getRootProps()}
                                                border= {`2px dashed ${palette.primary.main}`}
                                                p = "1rem"
                                                sx={{
                                                    "&:hover": {cursor: "pointer"}
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                { !values.picture ? (
                                                    <p>Add Picture of Project Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>{values.picture.name}</Typography>
                                                        <EditOutlined />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}

                                    </Dropzone>
                                </Box>

                                {/* Project 2 */}
                                <Typography
                                fontWeight="500" 
                                variant="h5" 
                                sx = {{
                                    mb: "1rem",
                                    mt: "1.5rem",
                                    gridColumn: "span 4"
                                    }}>
                                Project #2
                                </Typography>
                                <TextField 
                                    label = "Project #2 Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.projectNameTwo}
                                    name = "projectNameTwo"
                                    error = {Boolean(touched.projectNameTwo) && Boolean(errors.projectNameTwo)}
                                    helperText = {touched.projectNameTwo && errors.projectNameTwo}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Project #2 Github Repo"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.githubLinkTwo}
                                    name = "githubLinkTwo"
                                    error = {Boolean(touched.githubLinkTwo) && Boolean(errors.githubLinkTwo)}
                                    helperText = {touched.githubLinkTwo && errors.githubLinkTwo}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <TextField 
                                    label = "Project #2 Description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.descriptionTwo}
                                    name = "descriptionTwo"
                                    error = {Boolean(touched.descriptionTwo) && Boolean(errors.descriptionTwo)}
                                    helperText = {touched.descriptionTwo && errors.descriptionTwo}
                                    sx={{
                                        gridColumn: "span 4"
                                    }}
                                />
                                <TextField 
                                    label = "Link to Live Site"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value = {values.liveLinkTwo}
                                    name = "liveLinkTwo"
                                    error = {Boolean(touched.liveLinkTwo) && Boolean(errors.liveLinkTwo)}
                                    helperText = {touched.liveLinkTwo && errors.liveLinkTwo}
                                    sx={{
                                        gridColumn: "span 2"
                                    }}
                                />
                                <Box
                                    gridColumn="span 2"
                                    border = {`1px solid ${palette.neutral.light}`}
                                    borderRadius = "5px"
                                    p="1rem"
                                >
                                    <Dropzone
                                        acceptedFiles = ".jpg, .jpeg, .png"
                                        multiple={false}
                                        onDrop={(acceptedFiles) => {
                                            setFieldValue("pictureTwo", acceptedFiles[0])
                                        }}
                                    >
                                        {({getRootProps, getInputProps}) =>(
                                            <Box
                                                {...getRootProps()}
                                                border= {`2px dashed ${palette.primary.main}`}
                                                p = "1rem"
                                                sx={{
                                                    "&:hover": {cursor: "pointer"}
                                                }}
                                            >
                                                <input {...getInputProps()} />
                                                { !values.pictureTwo ? (
                                                    <p>Add Picture of Project Here</p>
                                                ) : (
                                                    <FlexBetween>
                                                        <Typography>{values.pictureTwo.name}</Typography>
                                                        <EditOutlined />
                                                    </FlexBetween>
                                                )}
                                            </Box>
                                        )}

                                    </Dropzone>
                                </Box>

                                
                                

                    </Box>
                    {/* Buttons */}
                    <Box>
                        <Button
                        fullWidth
                        type="submit"
                        sx = {{
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.neutral.dark,
                            color:palette.neutral.light,
                            "&:hover": {color: palette.secondary.main}
                        }}
                        >
                        Make My Website!
                        </Button>
                        
                    </Box>
                </form>
            )}

        </Formik>
    )}
    </>

  )
}

export default TwoProject;