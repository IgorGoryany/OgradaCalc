import { useCallback, useContext, useState } from 'react';

import { maxSideLength } from '@/shared/consts';
import type { FenceModels } from '@/shared/helpers';
import { FenceContext, cn } from '@/shared/helpers';
import { useInput } from '@/shared/hooks';
import type { Options } from '@/shared/ui';
import { Button, HStack, Select, VStack, Input, Flex } from '@/shared/ui';

import style from './CalcForm.module.scss';

const options: Options = [
  { value: '', text: 'Модель ограды', disabled: true },
  { value: '1', text: '№ 1' },
  { value: '2', text: '№ 2' },
  { value: '3', text: '№ 3' },
  { value: '4', text: '№ 4' },
  { value: '5', text: '№ 5' },
  { value: '6', text: '№ 6' },
  { value: '10', text: '№ 10' },
  { value: '11', text: '№ 11' },
  { value: '14', text: '№ 14' },
  { value: '15', text: '№ 15' },
  { value: '20', text: '№ 20' },
  { value: '21', text: '№ 21' },
  { value: '22', text: '№ 22' },
  { value: '23', text: '№ 23' },
  { value: '24', text: '№ 24' },
  { value: '25', text: '№ 25' },
  { value: '30', text: '№ 30' },
  { value: '31', text: '№ 31' },
  { value: '32', text: '№ 32' },
  { value: '33', text: '№ 33' },
  { value: '34', text: '№ 34' },
  { value: '35', text: '№ 35' },
  { value: '36', text: '№ 36' },
  { value: '37', text: '№ 37' },
  { value: '38', text: '№ 38' },
  { value: '40', text: '№ 40' },
];

const inputFunc = (value: string) =>
  !Number.isNaN(Number(value)) && +value < maxSideLength;

interface CalcFormProps {
  isMobile?: boolean;
  toggleVisibility: () => void;
  isTotalDetailsListVisible: boolean;
}

export const CalcForm = (props: CalcFormProps) => {
  const { isMobile, toggleVisibility, isTotalDetailsListVisible } = props;

  const widthInput = useInput(inputFunc);
  const heightInput = useInput(inputFunc);

  const [errors, setErrors] = useState({
    widthInput: false,
    heightInput: false,
    modelSelect: false,
  });

  const [model, setModel] = useState('');

  const [isLeft, setLeft] = useState(false);

  const { fenceValues, setFenceValues } = useContext(FenceContext);

  const onToggleLeft = useCallback(() => {
    setLeft(!isLeft);
  }, [isLeft]);

  const onCalcClick = useCallback(() => {
    const sizeX = +widthInput.value;
    const sizeY = +heightInput.value;
    const fenceModel = +model as FenceModels;

    if (!sizeX || !sizeY || !fenceModel) {
      setErrors({
        widthInput: !sizeX,
        heightInput: !sizeY,
        modelSelect: !fenceModel,
      });
      return;
    }

    setErrors({ widthInput: false, heightInput: false, modelSelect: false });
    // widthInput.onChange('');
    // heightInput.onChange('');
    setFenceValues?.([
      ...fenceValues,
      { fenceModel, sizeX, sizeY, isLeft, id: Date.now() },
    ]);
  }, [fenceValues, heightInput, isLeft, model, setFenceValues, widthInput]);

  const onClear = useCallback(() => {
    setFenceValues?.([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VStack max className={style.calcForm} gap="8">
      <Flex max direction={isMobile ? 'column' : 'row'} gap="8">
        <Select
          defaultValue=""
          error={errors.modelSelect}
          options={options}
          onChange={setModel}
        />
        <Input
          {...widthInput}
          flex11auto
          error={errors.widthInput}
          id="width"
          placeholder="Сторона с калиткой в mm"
          type="tel"
        />
        <Input
          {...heightInput}
          flex11auto
          error={errors.heightInput}
          id="height"
          placeholder="Другая сторона в mm"
          type="tel"
        />
      </Flex>

      <VStack gap="8">
        <HStack max className="btn-container" gap="8">
          <Button
            max
            className={cn({ [style.active]: isTotalDetailsListVisible })}
            id="total-calc"
            variant="gray"
            onClick={toggleVisibility}
          >
            {isTotalDetailsListVisible ? 'Свернуть' : 'Список деталей'}
          </Button>
          <Button max id="leftFence" onClick={onToggleLeft}>
            {isLeft ? 'Левая' : 'Правая'}
          </Button>
          <Button max id="calc" onClick={onCalcClick}>
            Считать
          </Button>
        </HStack>
        <Button
          underline
          className={style.clear}
          variant="inherit"
          onClick={onClear}
        >
          Очистить все
        </Button>
      </VStack>
    </VStack>
  );
};
