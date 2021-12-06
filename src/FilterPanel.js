import React from 'react'
import list from './List';
import cross from './images/icon-remove.svg'
import { v4 as uuidv4 } from 'uuid'

function FilterPanel ({selected, setSelected, panel, setPanel, clear, setClear}) {
   

    return (
     
        (panel.length === 0 ? null:
        <div className='tags-panel'>
            <ul className='tags-list'>
                {panel.map((el, index) => {
                    return(
                    <li key={uuidv4()} className = 'tags'>
                        <span className='tag-span'>{el}</span>
                            <button className='close'
                                    onClick={() => {
                                    const removePanel =   panel.filter((item)=> item!==el)
                                    const remove = list.filter(({skill}) => removePanel.every(x => skill.includes(x)))
                                    setPanel(removePanel)
                                    setSelected(remove)
                                    setClear(removePanel.length < 1 ? '' : 'Clear')
                                    }}>
                                <img className='cross' src={cross} alt="" />
                            </button>
                    </li>
                    )
                })}
            </ul>
        
            <span className='clear-span'
                onClick={()=> {
                    setSelected(list)
                    setPanel([])
                    setClear('')
                    }}>
                    {clear}
            </span>
        </div> )
    )
}

export default FilterPanel;