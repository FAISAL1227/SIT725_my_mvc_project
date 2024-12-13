document.getElementById('data-form').addEventListener('submit', async (e) => {
   e.preventDefault();
   const name = document.getElementById('name').value;

   try {
       const response = await fetch('/api/data', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ name }),
       });

       if (response.ok) {
           M.toast({ html: 'Data saved successfully!' });
       } else {
           M.toast({ html: 'Failed to save data!' });
       }
   } catch (error) {
       console.error('Error:', error);
       M.toast({ html: 'Server Error!' });
   }
});
