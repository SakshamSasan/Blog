import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CreatePost from "./CreatePost"

test('on initial render, this create button is disabled',()=>{

    render(<CreatePost />)
    //assertion
    expect(screen.getByRole('button',{name:/Create Post/i})).toBeDisabled()
})

test('if inputs fulfilled, this create button is enabled',()=>{

    render(<CreatePost />)
    //mimic user typing event
    userEvent.type(screen.getByLabelText(/title/i),'Self-improvement')
    userEvent.type(screen.getByLabelText(/author/i),'Hamza')
    userEvent.type(screen.getByLabelText(/content/i),'5 pillars of the process')
    //fetching by test ids
    expect(screen.getByTestId('dedo')).toBeEnabled()

})

//Integration test ko aise dekho user kaise aapki app use karega
//woh page pe land karega and then buttons disabled payega, type karega enabled ho jayega
//So simply combine above 2 tests

test('initially button disabled, then if inputs fulfilled, this create button is enabled',()=>{

    render(<CreatePost />)
    expect(screen.getByRole('button',{name:/Create Post/i})).toBeDisabled()
    //mimic user typing event
    userEvent.type(screen.getByLabelText(/title/i),'Self-improvement')
    userEvent.type(screen.getByLabelText(/author/i),'Hamza')
    userEvent.type(screen.getByLabelText(/content/i),'5 pillars of the process')
    //fetching by test ids
    expect(screen.getByTestId('dedo')).toBeEnabled()

})

//end-to-end mimics complete user usage
