import {
  LegendFieldSet,
  FieldSet,
  Form,
  InputForm,
  Check,
  LabelForInput,
  BtnFilter,
  BtnContiner,
} from './FilterForm.styled';

export const FilterForm = () => {
  return (
    <Form>
      <FieldSet>
        <LegendFieldSet>Type of pet</LegendFieldSet>
        <LabelForInput htmlFor="dog">
          Dog
          <InputForm type="radio" id="dog" name="typeofpet" value="dog" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="cat">
          Cat
          <InputForm type="radio" id="cat" name="typeofpet" value="cat" />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Sex</LegendFieldSet>
        <LabelForInput htmlFor="boy">
          Boy
          <InputForm type="radio" id="boy" name="sex" value="boy" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="girl">
          Girl
          <InputForm type="radio" id="girl" name="sex" value="girl" />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Age</LegendFieldSet>
        <LabelForInput htmlFor="less1year">
          less 1 year
          <InputForm
            type="radio"
            id="less1year"
            name="birthday"
            value="less1year"
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="from1to4years">
          from 1 to 4 years
          <InputForm
            type="radio"
            id="from1to4years"
            name="birthday"
            value="from1to4years"
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="from4years">
          from 4 years
          <InputForm
            type="radio"
            id="from4years"
            name="birthday"
            value="from4years"
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Size of the pet </LegendFieldSet>
        <LabelForInput htmlFor="big">
          big
          <InputForm type="radio" id="big" name="size" value="big" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="average">
          average
          <InputForm type="radio" id="average" name="size" value="average" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="small">
          small
          <InputForm type="radio" id="small" name="size" value="small" />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Sterilization </LegendFieldSet>
        <LabelForInput htmlFor="yes">
          yes
          <InputForm type="radio" id="yes" name="sterilization" value="yes" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="no">
          no
          <InputForm type="radio" id="no" name="sterilization" value="no" />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Lives </LegendFieldSet>
        <LabelForInput htmlFor="in street">
          in street
          <InputForm
            type="radio"
            id="in street"
            name="lives"
            value="in street"
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="shelter">
          shelter
          <InputForm type="radio" id="shelter" name="lives" value="shelter" />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="at volunteers">
          at volunteers
          <InputForm
            type="radio"
            id="at volunteers"
            name="lives"
            value="at volunteers"
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <BtnContiner>
        <BtnFilter type="submit">Submit</BtnFilter>
        <BtnFilter type="button">Clear all</BtnFilter>
      </BtnContiner>
    </Form>
  );
};
