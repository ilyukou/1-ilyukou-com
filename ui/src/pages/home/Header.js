export const Header = (props) => {
    return <>
        <div className="row marginTop50px">
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
            <div className="col-10 col-sm-8 col-md-6 col-xl-4">
                <p className="fs-1 text-center">
                    {props.title}
                </p>
            </div>
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
        </div>

        <div className="row marginTop50px">
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
            <div className="col-10 col-sm-8 col-md-6 col-xl-4">
                <p className="fs-3 text-center">
                    {props.firstParagraph}
                </p>
            </div>
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
        </div>

        <div className="row marginTop10px">
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
            <div className="col-10 col-sm-8 col-md-6 col-xl-4">
                <p className="fs-3 text-center">
                    {props.secondParagraph}
                </p>
            </div>
            <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
        </div>
    </>
}