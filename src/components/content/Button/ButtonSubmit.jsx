export function ButtonSubmit({ handleClickSubmit }) {
    return(
        <button type="submit" form="add" className="submit" onClick={() => handleClickSubmit()}>
			Submit
		</button>
    )
}