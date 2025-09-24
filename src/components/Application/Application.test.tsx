import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test("renders correctly Application component getByRole", () => {
        render(<Application />)
        //getByRole
        const pageHeadingElement = screen.getByRole("heading", {
            level: 1
        })
        expect(pageHeadingElement).toBeInTheDocument()

        const sectionHeadingElement = screen.getByRole("heading", {
            level: 2
        })
        expect(sectionHeadingElement).toBeInTheDocument()
        
        //getByText
        const paragraphElement = screen.getByText("All Fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
        //getByTitle
        const spanElement = screen.getByTitle("close")
        expect(spanElement).toBeInTheDocument()
        //getByAltText
        const imageElement = screen.getByAltText("a person with a laptop")
        expect(imageElement).toBeInTheDocument()

        const nameElement = screen.getByRole("textbox", {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        //getByLabelText
        const nameElementByLabelText = screen.getByLabelText("Name", {
            selector: "input"
        })
        expect(nameElementByLabelText).toBeInTheDocument()
        //getByPlaceholderText
        const nameElementByPlaceholderText = screen.getByPlaceholderText("Fullname")
        expect(nameElementByPlaceholderText).toBeInTheDocument()
        expect(nameElementByPlaceholderText.tagName).toBe("INPUT") //sprawdzenie czy to input jako html
        //getByDisplayValue
        const nameElementByDisplayValue = screen.getByDisplayValue("olek")
        expect(nameElementByDisplayValue).toBeInTheDocument()

        const bioElement = screen.getByRole("textbox", {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const termsElementByLabelText = screen.getByLabelText("I accept the terms and conditions")
        expect(termsElementByLabelText).toBeInTheDocument()

        const submitbuttonElement = screen.getByRole("button")
        expect(submitbuttonElement).toBeInTheDocument()
   
        //arrange
        //act
        //assert
    })
})