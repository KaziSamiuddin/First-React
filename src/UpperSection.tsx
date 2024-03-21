
function UpperSection(){
    const tremsCondition = [
        'Registration will be confirmed after verifying payment details within the specified period.',
        'No refunds are available once registration is complete.',
        "Espektro'24 will take place from March 21 to March 24. Accommodation will be provided between March 21 and March 23. No accommodation will be provided on March 24.",
        "Espektro'24 Entry Pass is only available for 3 Days pack.",
        "After checking the Govt. ID proof, accommodation will be provided.",
        "Adherence to the Terms and Conditions is required, aligning with CGEC Students' Union regulations."
    ];
    return (
        <>
            <div><h1>Accomodation</h1></div>
            <div>
                <ul className="trems">
                {tremsCondition.map(list =><li>{list}</li>)}
                </ul>
            </div>
        </>
    )
}

export default UpperSection;