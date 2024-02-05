function Movie({ title, year, synopsis }) {
    return (
        <>
            {/* no key prop here - only at top level inside .map */}

            < li >
                <h3>{title}</h3> <span>({year})</span>
                <div>{synopsis}</div>
            </li >
        </>
    )
}
export default Movie