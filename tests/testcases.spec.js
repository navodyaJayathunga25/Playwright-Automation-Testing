import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

// ============================================
// POSITIVE FUNCTIONAL TEST CASES
// ============================================

test('Pos_Fun_0001 - Convert a simple sentence', async ({ page }) => {
  
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('api sellam karanavaa');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  await expect(output).toContainText('අපි සෙල්ලම් කරනවා ');

  console.log('📝 Test: Pos_Fun_0001 - Convert a simple sentence');
  console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0002 - Convert a compound sentence', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('api bus stand eka LaGA kaden dhaval kaeema aran chithrapatiyak balanna yanavaa');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('අපි bus stand එක ළඟ කඩෙන් දවල් කෑම අරන් චිත්‍රපටියක් බලන්න යනවා');
    console.log('📝 Test: Pos_Fun_0002 - Convert a compound sentence');
    console.log('✅ Status:   PASSED ✓\n');
 });

test('Pos_Fun_0003 - Convert a complex sentence', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('eyaa iskoolee enne naee kiyapu nisaa matath baee kiyalaa hithunaa');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('එයා ඉස්කෝලේ එන්නෙ නෑ කියපු නිසා මටත් බෑ කියලා හිතුනා ');
    console.log('📝 Test: Pos_Fun_0002 - Convert a complex sentence');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0004 - Convert an interrogative form', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('oyaa assignment eka karaadha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
 
    await expect(output).toContainText('ඔයා assignment එක කරාද?');
    console.log('📝 Test: Pos_Fun_0004 - Convert an interrogative form');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0005 - Convert an imperative form', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('kaee gahanna epaa');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
  
    await expect(output).toContainText('කෑ ගහන්න එපා');
    console.log('📝 Test: Pos_Fun_0005 - Convert an imperative form');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0006 - Convert a positiveform', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('mama iiyee library eken gaththu potha iiyema kiyavalaa ivarayi ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
  
    await expect(output).toContainText('මම ඊයේ library එකෙන් ගත්තු පොත ඊයෙම කියවලා ඉවරයි ');
    console.log('📝 Test: Pos_Fun_0006 - Convert a positiveform');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0007 - Convert a negative form', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('Adhiishge kakula thuvaala velaa nisaa, adha api kavuruth sellam karanna giye naee ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
  
    await expect(output).toContainText('අදීශ්ගෙ කකුල තුවාල වෙලා නිසා, අද අපි කවුරුත් සෙල්ලම් කරන්න ගියෙ නෑ ');
    console.log('📝 Test: Pos_Fun_0007 - Convert a negative form');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0008 - Convert a simple greeting', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('suBha dhavasak');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
 
    await expect(output).toContainText('සුභ දවසක්');
    console.log('📝 Test: Pos_Fun_0008 - Convert a simple greeting');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0009 - Convert a simple request', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('karuNaakaralaa mee document eka print karalaa dhenna puluvandha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
 
    await expect(output).toContainText('කරුණාකරලා මේ document එක print කරලා දෙන්න පුලුවන්ද?');
    console.log('📝 Test: Pos_Fun_0009 - Convert a simple request');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0010 - Convert a simple response', async ({ page }) => {
  
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('inna mama evannam ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  await expect(output).toContainText('ඉන්න මම එවන්නම් ');

  console.log('📝 Test: Pos_Fun_0010 - Convert a simple response');
  console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0011 - Convert a polite phrasing', async ({ page }) => {
  
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('samaavenna oyaage hitha ridhuNaanam ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  await expect(output).toContainText('සමාවෙන්න ඔයාගෙ හිත රිදුණානම්  ');

  console.log('📝 Test: Pos_Fun_0011 - Convert a polite phrasing');
  console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0012 - Convert a frequently used day-to-day expression', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('mata adha mahansiyi');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
 
    await expect(output).toContainText('මට අද මහන්සියි');
    console.log('📝 Test: Pos_Fun_0012 - Convert a frequently used day-to-day expression');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0013 - Convert an informal phrasing', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('aeyi ban mokadha prashne?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    await expect(output).toContainText('ඇයි බන් මොකද ප්‍රශ්නෙ?');
    console.log('📝 Test: Pos_Fun_0013 - Convert an informal phrasing');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0014 - Convert a multi-word expression', async ({ page }) => {
  
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('anee inna ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  await expect(output).toContainText('අනේ ඉන්න ');

  console.log('📝 Test: Pos_Fun_0014 - Convert a multi-word expressio');
  console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0015 - Checking the proper spcaing', async ({ page }) => {
  
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('ammaa nuvara giyaa  ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  await expect(output).toContainText('අම්මා නුවර ගියා ');

  console.log('📝 Test: Pos_Fun_0015 - Checking the proper spcaing');
  console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0016 - Checking a repeated word expression', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('baee baee ehema karanna baee');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('බෑ බෑ එහෙම කරන්න බෑ');
    console.log('📝 Test: Pos_Fun_0016 - Checking a repeated word expression');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0017 - Checking a repeated word expression', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('ela ela');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('එල එල');
    console.log('📝 Test: Pos_Fun_0017 - Checking a repeated word expression');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0018 - Cheking a negation pattern', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('mama ehema ekak dhaenan hitiye naee');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('මම එහෙම එකක් දැනන් හිටියෙ නෑ ');
    console.log('📝 Test: Pos_Fun_0018 - Cheking a negation pattern');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0019 - Convert a request form with politenes', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('adhama mata vaedee karaganna puluvan veevidha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
    await expect(output).toContainText('අදම මට වැඩේ කරගන්න පුලුවන් වේවිද? ');
    console.log('📝 Test: Pos_Fun_0019 - Convert a request form with politenes');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0020 - Checking English terms embedded in Singlish', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('mata oyaage email address eka dhenna puluvandha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContainText('email address');
    console.log('📝 Test: Pos_Fun_0020 - Checking English terms embedded in Singlish');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0021 - Checking punctuation marks', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('adoo machan! uba enne naedhdha? dhaen kochchara velaa giyaadha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContainText('අඩෝ මචන්! උබ එන්නෙ නැද්ද? දැන් කොච්චර වෙලා ගියාද? ');
    console.log('📝 Test: Pos_Fun_0021 - Checking punctuation marks');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0022 - Checking a time format', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('hariyatama 7.30 venakota aevith inna');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  
 
    await expect(output).toContainText('7.30');
    console.log('📝 Test: Pos_Fun_0022 - Checking a time format');
    console.log('✅ Status:   PASSED ✓\n');
 
});

test('Pos_Fun_0023 - Checking the currency', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('course fee eka Rs.30,000yi');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContainText('Rs.30,000');
    console.log('📝 Test: Pos_Fun_0023 - Checking the currency');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0024 - Checking a date', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('janavaari 5venidhata trip eka dhaagamu');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContainText('ජනවාරි 5වෙනිදට trip එක දාගමු');
    console.log('📝 Test: Pos_Fun_0024 - Checking a date');
    console.log('✅ Status:   PASSED ✓\n');

});

test('Pos_Fun_0025 - Checking a units of measurements', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('haal 5kg aran enna');
  //await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContainText('5kg');
    console.log('📝 Test: Pos_Fun_0025 - Checking a units of measurements');
    console.log('✅ Status:   PASSED ✓\n');

});

// ============================================
// NEGATIVE FUNCTIONAL TEST CASES
// ============================================

test('Neg_Fun_0001 - Checking multiple spacess', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('ara maQQ oyaata evva     Instagram account eka check   kalaadha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('අර මං ඔයාට එව්ව Instagram account එක check කලාද?');
    console.log('📝 Test: Neg_Fun_0001 - Checking multiple spacess');
   
});

test('Neg_Fun_0002 - Checking paragraph-style input and line breaks', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('Operating system ekak aethulee thavath operating system ekak run karana technology ekata api saralavama virtualization kiyalaa kiyanavaa.       methaenadhii Virtual OS eka eeka run vena Host OS eka run vena hardware device vala hardware resources virtual resources vidhihata convert karagena paavichchi karanavaa. ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('Operating system එකක් ඇතුලේ තවත් operating system එකක් run කරන technology එකට අපි සරලවම virtualization කියලා කියනවා.  මෙතැනදී Virtual OS එක ඒක run වෙන Host OS එක run වෙන hardware device වල hardware resources virtual resources විදිහට convert කරගෙන පාවිච්චි කරනවා');
    console.log('📝 Test: Neg_Fun_0002 - Checking paragraph-style input and line breaks');
   

});

test('Neg_Fun_0003 - Typing causes incorrect conversion', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('adha Teams meetingk ekee link eka thaama dhaalaa nae needha?');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('අද Teams meeting එකේ link එක තාම දාලා නැ නේද?');
    console.log('📝 Test: Neg_Fun_0003 - Typing causes incorrect conversion');
   

});

test('Neg_Fun_0004 - Checking Grammer', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('mama iiye gedhara giyaa.');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('මම ඊයෙ ගෙදර ගියෙමි');
    console.log('📝 Test: Neg_Fun_0004 - Checking Grammers');
   

});

test('Neg_Fun_0005 - Greeting English word', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('Hi, mama kaviShka');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('Hi, මම කවිෂ්ක');
    console.log('📝 Test: Neg_Fun_0005 - Greeting English word');
   

});

test('Neg_Fun_0006 - Identifying a name in English', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('Ayiyo Navodya, ooka karanna epaa.');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('අයියො Navodya, ඕක කරන්න එපා.');
    console.log('📝 Test: Neg_Fun_0006 - Identifying a name in English');
   

});

test('Neg_Fun_0007 - Sentence containg  with English words', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('oyaa "Decent of the sun" baeluvadha? ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('ඔයා "Decent of the sun" බැලුවද? ');
    console.log('📝 Test: Neg_Fun_0001 - Checking multiple spacess');
   

});

test('Neg_Fun_0008 - Sentence containg  with English words', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('See you soon yaaLuvaa');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('See you soon යාළුවා');
    console.log('📝 Test: Neg_Fun_0008 - Sentence containg  with English word');
   

});

test('Neg_Fun_0009 - Sentence containg  with English words', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('Me too.api dhennama ekata yamu.');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('Me too.අපි දෙන්නම එකට යමු.');
    console.log('📝 Test: Neg_Fun_0009 - Sentence containg  with English words');
   

});

test('Neg_Fun_0010 - Sentence containg  with English words', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('ara balanna aeDHUma dhihaa, just like sun ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('අර බලන්න ඇඳුම දිහා, just like sun');
    console.log('📝 Test: Neg_Fun_0010 - Sentence containg  with English words');
   

});

test('Neg_Fun_0011 - Sentence containg missing spaces / joined words', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('eyaamatakathaakareenaee ');
  await inputArea.press('Space');
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  

    await expect(output).toContain('එයා මට කතා කරේ නෑ ');
    console.log('📝 Test: Neg_Fun_0011 - Sentence containg missing spaces / joined wordss');
   

});

// ============================================
// UI TEST CASES
// ============================================

test('Pos_UI_0001 - Sinhala output updates automatically in real time', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  
  // Type character by character
  await inputArea.fill('Assignment eka karaadha? ');
  await page.waitForTimeout(300);
  
  const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
  const afterOya = await output.textContent();
  
  await inputArea.fill('oyaa');
  await page.waitForTimeout(300);
  
  const afterOyaa = await output.textContent();
  
  
});
/*
test('Neg_UI_0001 - Clear button resets both input and output fields', async ({ page }) => {
  const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputArea.fill('test text');
  await page.waitForTimeout(500);
  
  // Find and click clear button (adjust selector based on actual button)
  const clearButton = page.locator('button:has-text("Clear"), button[title*="Clear"]');
  if (await clearButton.isVisible()) {
    await clearButton.click();
    await page.waitForTimeout(300);
    
    const inputText = await inputArea.inputValue();
    const output = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
    const outputText = await output.textContent();
    
    
});*/