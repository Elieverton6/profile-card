import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    padding-top: 2rem;
    background-color: #22B7E7;

    .profile-card-wrapper {
        margin: 0 auto;
        border-radius: 1rem;
        max-width: 350px;
        width: 100%;
        background-color: white;
        
        .background {
            max-width: 350px;
            width: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }

        .profile {

            .image-profile {
                border-radius: 100%;
                justify-content: center;
                display: flex;
                margin: -50px auto 0 auto;
            }
        
            .profile-name-age-city {
                text-align: center;

                .name-age {
                    font-weight: 600;
                    font-family: 'Cairo', sans-serif;
                    margin: 1rem 0 0.3rem 0;
                    justify-content: center;
                    display: flex;
                    align-items: center;

                    h2 {
                        color: #1C1C1C;
                        margin: 0 0.8rem 0 0;
                    }

                    p {
                        margin: 0;
                        font-size: 1.5rem;
                        color: #4F4F4F;
                    }
                }

                h3 {
                    font-weight: 200;
                    margin: 0 0 2rem 0;
                    color: gray;
                }
            }

            .hr {
                height: 2px;
                background-color: rgba(67, 67, 67, 0.1);
                width: 100%;
            }

            .socialnetworks {
                font-family: 'Cairo', sans-serif;
                margin: 2rem 0;
                text-align: center;
                justify-content: space-around;
                display: flex;

                h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                }

                p {
                    font-weight: 300;
                    color: #434343;
                    letter-spacing: 1px;
                    margin: 0 0 2rem 0;
                }
            }

        }

    }
`