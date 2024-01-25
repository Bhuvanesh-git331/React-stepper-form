import { Button } from "@mui/material"

const CustomButton = (props) => {
    const {  handleContinue, handleBack } = props

    const styles = {
        button1: {
            margin: 20,
            outerWidth:'100%'
        },

        button2:{
            margin: 20,
            backgroundColor:'#d95736'
        }
    }

    return (
        <div>
            <Button
                variant='contained'
                style={styles.button1}
                onClick={handleContinue}>
                Continue
            </Button>
            {
               handleBack!==undefined &&
                <Button
                    variant='contained'
                    style={styles.button2}
                    onClick={handleBack}>
                    Back
                </Button>
            }


        </div>
    )
}

export default CustomButton