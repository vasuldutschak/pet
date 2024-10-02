import styled from "styled-components";
import {useFormik} from "formik";


const FormContainer = styled.div`
    max-width: 668px;
    width: 100%;
    margin: 0 auto;
    
`

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    height: 82px;
`

const Field = styled.div`
    width: 100%;
    height: inherit;
    position: relative;
    
    input{
        width: 100%;
        height: inherit;
        outline: unset;
        border: unset;
        font-family: 'Open Sans',sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: 16.41px;
        color: rgba(9, 64, 103, 1);
        padding: 0 30px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        
        &::placeholder{
            color: rgba(205, 205, 205, 1);
        }
        &:focus,&:active{
            color: rgba(9, 64, 103, 1);
        }
    }
`

const ErrorField = styled.div`
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #ff0000;
`

const SubmitButton = styled.button`
    all: unset;
    width: fit-content;
    white-space: nowrap;
    background: rgba(61, 169, 252, 1);
    height: inherit;
    padding: 0 60px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: 'Open Sans',sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 16.41px;
    color: rgba(255, 255, 255, 1);
    transition: all 0.4s ease;
    
    &:hover{
        cursor: pointer;
        background: #006A94;
    }
    &:active{
        transform: scale(.9);
    }
`

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

function FormFeedback(props) {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            resetForm()
        }
    });
    return (
        <FormContainer>
            <FormStyled onSubmit={formik.handleSubmit} className={formik.errors.email ? 'error' : ''}>
                <Field>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='Your Email..'
                    />
                    {formik.errors.email ? <ErrorField>{formik.errors.email}</ErrorField> : null}
                </Field>
                <SubmitButton type='submit'>Email us</SubmitButton>
            </FormStyled>
        </FormContainer>
    );
}

FormFeedback.propTypes = {};

export default FormFeedback;