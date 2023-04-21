import { useState } from 'react';
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
  const [typeofpet, setTypeofpet] = useState('');
  const [sex, setSex] = useState('');
  // const [birthday, setBirthday] = useState('');
  const [size, setSize] = useState('');
  const [sterilization, setSterilization] = useState('');
  const [lives, setLives] = useState('');

  const handleClearAll = () => {
    setTypeofpet('');
    setSex('');
    // setBirthday('');
    setSize('');
    setSterilization('');
    setLives('');
    localStorage.setItem('typeofpet', '');
    localStorage.setItem('sex', '');
    // localStorage.setItem('birthday', '');
    localStorage.setItem('size', '');
    localStorage.setItem('sterilization', '');
    localStorage.setItem('lives', '');
  };
  const handleChooseRadioButton = e => {
    switch (e.target.value) {
      case 'dog':
        setTypeofpet(e.target.value);
        localStorage.setItem('typeofpet', e.target.value);
        break;
      case 'cat':
        setTypeofpet(e.target.value);
        localStorage.setItem('typeofpet', e.target.value);
        break;
      case 'boy':
        setSex(e.target.value);
        localStorage.setItem('sex', e.target.value);
        break;
      case 'girl':
        setSex(e.target.value);
        localStorage.setItem('sex', e.target.value);
        break;
      // case 'less1year':
      //   setBirthday(e.target.value);
      //   localStorage.setItem('birthday', e.target.value);
      //   break;
      // case 'from1to4years':
      //   setBirthday(e.target.value);
      //   localStorage.setItem('birthday', e.target.value);
      //   break;
      // case 'from4years':
      //   setBirthday(e.target.value);
      //   localStorage.setItem('birthday', e.target.value);
      //   break;
      case 'big':
        setSize(e.target.value);
        localStorage.setItem('size', e.target.value);
        break;
      case 'average':
        setSize(e.target.value);
        localStorage.setItem('size', e.target.value);
        break;
      case 'small':
        setSize(e.target.value);
        localStorage.setItem('size', e.target.value);
        break;
      case 'yes':
        setSterilization(e.target.value);
        localStorage.setItem('sterilization', e.target.value);
        break;
      case 'no':
        setSterilization(e.target.value);
        localStorage.setItem('sterilization', e.target.value);
        break;
      case 'in street':
        setLives(e.target.value);
        localStorage.setItem('lives', e.target.value);
        break;
      case 'shelter':
        setLives(e.target.value);
        localStorage.setItem('lives', e.target.value);
        break;
      case 'at volunteers':
        setLives(e.target.value);
        localStorage.setItem('lives', e.target.value);
        break;

      default:
        handleClearAll();
        break;
    }
  };
  return (
    <Form>
      <FieldSet>
        <LegendFieldSet>Type of pet</LegendFieldSet>
        <LabelForInput htmlFor="dog">
          Dog
          <InputForm
            type="radio"
            id="dog"
            name="typeofpet"
            value="dog"
            checked={typeofpet === 'dog'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="cat">
          Cat
          <InputForm
            type="radio"
            id="cat"
            name="typeofpet"
            value="cat"
            checked={typeofpet === 'cat'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Sex</LegendFieldSet>
        <LabelForInput htmlFor="boy">
          Boy
          <InputForm
            type="radio"
            id="boy"
            name="sex"
            value="boy"
            checked={sex === 'boy'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="girl">
          Girl
          <InputForm
            type="radio"
            id="girl"
            name="sex"
            value="girl"
            checked={sex === 'girl'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      {/* <FieldSet> */}
      {/* <LegendFieldSet>Age</LegendFieldSet>
        <LabelForInput htmlFor="less1year">
          less 1 year
          <InputForm
            type="radio"
            id="less1year"
            name="birthday"
            value="less1year"
            checked={birthday === 'less1year'}
            onChange={handleChooseRadioButton}
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
            checked={birthday === 'from1to4years'}
            onChange={handleChooseRadioButton}
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
            checked={birthday === 'from4years'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet> */}
      <FieldSet>
        <LegendFieldSet>Size of the pet </LegendFieldSet>
        <LabelForInput htmlFor="big">
          big
          <InputForm
            type="radio"
            id="big"
            name="size"
            value="big"
            checked={size === 'big'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="average">
          average
          <InputForm
            type="radio"
            id="average"
            name="size"
            value="average"
            checked={size === 'average'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="small">
          small
          <InputForm
            type="radio"
            id="small"
            name="size"
            value="small"
            checked={size === 'small'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <FieldSet>
        <LegendFieldSet>Sterilization </LegendFieldSet>
        <LabelForInput htmlFor="yes">
          yes
          <InputForm
            type="radio"
            id="yes"
            name="sterilization"
            value="yes"
            checked={sterilization === 'yes'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="no">
          no
          <InputForm
            type="radio"
            id="no"
            name="sterilization"
            value="no"
            checked={sterilization === 'no'}
            onChange={handleChooseRadioButton}
          />
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
            checked={lives === 'in street'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="shelter">
          shelter
          <InputForm
            type="radio"
            id="shelter"
            name="lives"
            value="shelter"
            checked={lives === 'shelter'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
        <LabelForInput htmlFor="at volunteers">
          at volunteers
          <InputForm
            type="radio"
            id="at volunteers"
            name="lives"
            value="at volunteers"
            checked={lives === 'at volunteers'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <BtnContiner>
        <BtnFilter type="submit">Submit</BtnFilter>
        <BtnFilter type="button" onClick={handleClearAll}>
          Clear all
        </BtnFilter>
      </BtnContiner>
    </Form>
  );
};
