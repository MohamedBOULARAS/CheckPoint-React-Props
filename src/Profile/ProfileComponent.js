import Button from '@material-ui/core/Button';



function  ProfileComponent (props) {
    const { fullName, bio, profession, children, handleName } = props
    return (<div style={{backgroundColor: "#dbc7ba", border: "5px solid #3b6978", borderRadius: "10px", height: "400px", width: "300px", borderOpacity: "0.1"}}>
            <div>
                { children }
            </div>
            <div>
                <h1 style={{fontFamily: 'Sukhumvit Set', fontSize: 'Medium', color: ''}}> { fullName } </h1>
                <p style={{color: '#7c7c7b', fontSize: "13px", paddingLeft: "10px", paddingRight: "10px"}}> { bio } </p>
                <h4 style={{paddingTop: "10px"}}> { profession } </h4>
                <Button onClick={e => handleName(e)} variant="contained" color="secondary">
                  Click Me
                </Button>
            </div>
        </div>

    )
};

export default ProfileComponent;