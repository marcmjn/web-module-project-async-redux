import React from "react";
import { connect } from "react-redux";
import { getDog } from './actions';

const DogList = props => {
    const fetchDog = e => {
        e.preventDefault();
        props.getDog();
    };

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>I love Dogs!</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {props.dog && <img src={props.dog} alt="Dog" 
                    style={{ 
                        margin: '20px', 
                        padding: '10px 20px',
                         }} />}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchDog} 
                    style={{ 
                        margin: '20px', 
                        padding: '10px 20px', 
                        backgroundColor: 'skyblue', 
                        color: '#fff', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        border: '1px solid black',
                        }}>Fetch Random doggy!</button>
        </>
    );
};

const mapStateToProps = state => ({
    dog: state.dog,
    error: state.error
});

export default connect(mapStateToProps, { getDog })(DogList);
