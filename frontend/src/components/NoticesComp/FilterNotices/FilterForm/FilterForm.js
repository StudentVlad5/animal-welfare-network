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
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FilterForm = ({ closeModal }) => {
  const [typeofpet, setTypeofpet] = useState(
    localStorage.getItem('typeofpet') ? localStorage.getItem('typeofpet') : '',
  );
  const [sex, setSex] = useState(
    localStorage.getItem('sex') ? localStorage.getItem('sex') : '',
  );
  // const [birthday, setBirthday] = useState('');
  const [size, setSize] = useState(
    localStorage.getItem('size') ? localStorage.getItem('size') : '',
  );
  const [sterilization, setSterilization] = useState(
    localStorage.getItem('sterilization')
      ? localStorage.getItem('sterilization')
      : '',
  );
  const [lives, setLives] = useState(
    localStorage.getItem('lives') ? localStorage.getItem('lives') : '',
  );

  const [searchParams, setSearchParams] = useSearchParams();
  // const { id } = useParams();
  const { t } = useTranslation();

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
    setSearchParams({ page: 1, perPage: 12 });
  };

  const setParams = () => {
    const params = Object.fromEntries(searchParams);
    params.page = 1;
    if (typeofpet !== '') {
      params.typeofpet = typeofpet;
    }
    if (sex !== '') {
      params.sex = sex;
    }
    if (size !== '') {
      params.size = size;
    }
    if (sterilization !== '') {
      params.sterilization = sterilization;
    }
    if (lives !== '') {
      params.lives = lives;
    }
    setSearchParams(params);
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
      case 'home':
        setLives(e.target.value);
        localStorage.setItem('lives', e.target.value);
        break;
      default:
        handleClearAll();
        break;
    }
  };

  return (
    <Form
      // action={`${id}/?${searchParams}`}
      onSubmit={e => e.preventDefault()}
    >
      <FieldSet>
        <LegendFieldSet>Type of pet</LegendFieldSet>
        <LabelForInput htmlFor="dog">
          {t("Dog")}
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
          {t("Cat")}
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
          {t("Boy")}
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
          {t("Girl")}
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
        <LegendFieldSet>{t("Size of the pet")} </LegendFieldSet>
        <LabelForInput htmlFor="big">
          {t("big")}
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
          {t("average")}
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
          {t("small")}
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
        <LegendFieldSet>{t("Sterilization")} </LegendFieldSet>
        <LabelForInput htmlFor="yes">
          {t("yes")}
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
          {t("no")}
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
        <LegendFieldSet>{t("Lives")} </LegendFieldSet>
        <LabelForInput htmlFor="in street">
          {t("in street")}
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
          {t("shelter")}
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
          {t("at volunteers")}
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
        <LabelForInput htmlFor="home">
          {t("home")}
          <InputForm
            type="radio"
            id="home"
            name="lives"
            value="home"
            checked={lives === 'home'}
            onChange={handleChooseRadioButton}
          />
          <Check className="check" />
        </LabelForInput>
      </FieldSet>
      <BtnContiner>
        <BtnFilter
          type="submit"
          onClick={e => {
            setParams();
            closeModal(e);
          }}
        >
          {t("Submit")}
        </BtnFilter>
        <BtnFilter type="button" onClick={handleClearAll}>
          {t("Clear all")}
        </BtnFilter>
      </BtnContiner>
    </Form>
  );
};
