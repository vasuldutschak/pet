import PropTypes from 'prop-types';
import styled from "styled-components";
import starImage from './../assets/star.png'


const FeedbackItemContainer = styled.section`
    max-width: 100%;
    width: 100%;
    
    box-shadow: 0px 0px 2px 2px rgba(39, 35, 67, 0.03) ;
    border-radius: 10px;
    
    .content_container{
        
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        padding: 30px;

        .feedback {
            font-family: 'Open Sans',sans-serif;
            font-size: 30px;
            font-weight: 400;
            line-height: 48px;
            text-align: left;
            color: rgba(9, 64, 103, 1);
        }

        .flex{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .rating{
                display: flex;
                align-items: center;
                img {
                    width: 20px;  /* Розмір зірок */
                    height: 20px;
                    margin-right: 5px; /* Відступ між зірками */
                }
            }

            .user_info{
                h4{
                    font-family: 'Open Sans',sans-serif;
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 48px;
                    text-align: left;
                    color: rgba(9, 64, 103, 1);
                }
                p{
                    font-family: 'Open Sans',sans-serif;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 25px;
                    text-align: left;
                    color: rgba(78, 97, 109, 1);
                }
            }
        }
    }
   
    
`

const generateRatingView = (count) => {
    const stars = Array(count).fill(0); // Генеруємо масив зірок за кількістю

    return (
        <>
            {stars.map((_, index) => (
                <img key={index} src={starImage} alt="star" />
            ))}
        </>
    )
}

function FeedbackItem({userName,occupation,feedback,rating}) {
    return (
        <FeedbackItemContainer>
            <div className="content_container">
                <h3 className='feedback'>{feedback}</h3>
                <div className="flex">
                    <div className="user_info">
                        <h4>{userName}</h4>
                        <p>{occupation}</p>
                    </div>
                    <div className="rating">
                        {generateRatingView(rating)}
                    </div>
                </div>
            </div>
        </FeedbackItemContainer>
    );
}

FeedbackItem.propTypes = {
    userName: PropTypes.string,
    occupation: PropTypes.string,
    feedback: PropTypes.string,
    rating: PropTypes.number,
};

export default FeedbackItem;