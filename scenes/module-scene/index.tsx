import React from 'react';
import { getModuleData, IModuleItem } from '../../services/module.service';

interface IModuleScene {
  moduleItems: IModuleItem[];
}

export const ModuleScene = ({ moduleItems }: IModuleScene) => {
  return (
    <div>
      {moduleItems.map(item => (
        <>
          <div>{item.question}</div>
          <div>{item.answer}</div>
          <div>{item.source}</div>
        </>
      ))}
    </div>
  );
};

ModuleScene.getInitialProps = async (ctx): Promise<IModuleScene> => {
  const data = getModuleData();

  return {
    moduleItems: data,
  };
};
