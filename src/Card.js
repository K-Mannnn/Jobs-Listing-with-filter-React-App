import React from 'react';
import FilterPanel from './FilterPanel'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'


function Card ({selected, setSelected}) {

    const [panel, setPanel] = useState([])

    const [clear, setClear] = useState('')

    return(

        <main className='main'>
        
            <FilterPanel selected = {selected} setSelected={setSelected} panel={panel}  setPanel={setPanel}  
                clear={clear} setClear={setClear}
            />
                {selected.map((job) => (
                    
                    <div key={uuidv4()} className='company-details'>
                    
                        <div className='logo'>
                            <img className='img' src={job.Img} alt="" />
                            <div className='job-description'>
                            
                                <div >
                                    <span className='company-span company'>{job.company}</span>
                                    <span className='company-span post'>{job.post}</span>
                                    <span className='company-span featured'>{job.featured}</span>
                                </div>
                                
                                <h1>{job.jobtitle}</h1>

                                <div className='details'>
                                    <span className='details-span time'>{job.time}</span>
                                    <span className='details-span contract'>{job.contract}</span>
                                    <span className='details-span location'>{job.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className='skills'>
                            {job.skill.map((language) => {
                                
                                return (
                                    <button 
                                    onClick={() => {
                                    
                                        if (job.skill.includes(language)) {
                                            const filtered = selected.filter(item => item.skill.includes(language))  
                                            setSelected(filtered);
                                            setClear('Clear');
                                            }
                                        setPanel(panel => [...panel, language])
                                        }}
                                        

                                    key={language} className='btn btn-skills'>{language}</button> 
                                
                                 
                                 )
                                 
                            })}
                                
                        </div>
                    </div>
                    ))}
            
            <div className="attribution">
                Challenge by Frontend Mentor. 
                Coded by <span className='kiran'>Kiran Mann</span> .
            </div>
        </main>
    )
}

export default Card;