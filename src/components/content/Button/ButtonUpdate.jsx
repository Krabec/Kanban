export function ButtonUpdate({description, dataId, handleClickUpdates}) {
    return(
        <button type="submit" form="add" className="submit" value = {description + "{/d/" + dataId} onClick={(e) => handleClickUpdates(e)}>
			Update
		</button>
    )
}