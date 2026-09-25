export function processarLogsTestes(logs) {
  let totalSucessos = 0;
  let totalFalhas = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === 'pass') {
      totalSucessos++;
    } else if (logs[i] === 'fail') {
      totalFalhas++;
    } else {
    }
  }

  let totalTestes = totalSucessos + totalFalhas;
  let passRate = 0;

  if (totalTestes > 0) {
    passRate = (totalSucessos / totalTestes) * 100;
  } else {
    passRate = 0;
  }

  return {
    totalTestes: totalTestes,
    totalSucessos: totalSucessos,
    totalFalhas: totalFalhas,
    passRate: passRate + '%'
  };
}